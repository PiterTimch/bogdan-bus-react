import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef } from "react";
import { APP_ENV } from "../../env";
import { useSaveImageMutation } from "../../services/fileService";

interface Props {
    value: string;
    onChange: (value: string) => void;
    onDescriptionImageIdsChange: (ids: number[]) => void;
}

const CityDescriptionEditor: React.FC<Props> = ({
                                                    value,
                                                    onChange,
                                                    onDescriptionImageIdsChange,
                                                }) => {
    const [saveImage] = useSaveImageMutation();
    const editorRef = useRef<any>(null);
    const uploadedImagesRef = useRef<{ id: number; imageName: string }[]>([]);

    const uploadImage = async (file: Blob) => {
        const response = await saveImage({ imageFile: file }).unwrap();

        uploadedImagesRef.current.push({
            id: response.id,
            imageName: response.imageName,
        });

        const url = `${APP_ENV.IMAGE_BASE_URL}large/${response.imageName}`;
        return { url, id: response.id };
    };

    const syncImageIds = (content: string) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;

        console.log(tempDiv)

        const imgs = Array.from(tempDiv.querySelectorAll("img"));

        const ids = imgs.map(img => {
            const src = img.getAttribute("src") || "";
            const match = uploadedImagesRef.current.find(x => src.includes(x.imageName));
            return match?.id;
        }).filter(Boolean) as number[];

        onDescriptionImageIdsChange(ids);
    };

    return (
        <Editor
            onInit={(_, e) => (editorRef.current = e)}
            apiKey={APP_ENV.APP_TINYMCE_KEY}
            value={value}
            onEditorChange={(content) => {
                onChange(content);
                syncImageIds(content);
            }}
            init={{
                height: 450,
                plugins: [
                    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
                    "help", "image", "insertdatetime", "link", "lists", "media",
                    "preview", "searchreplace", "table", "visualblocks"
                ],
                toolbar:
                    "undo redo | styles | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image code",
                automatic_uploads: true,
                images_file_types: "jpg,jpeg,png,webp",
                paste_data_images: false,

                setup: (editor) => {
                    editor.on("Paste", async (e: any) => {
                        const items = e.clipboardData?.items;
                        if (!items) return;

                        for (const item of items) {
                            if (item.type.indexOf("image") !== -1) {
                                e.preventDefault();
                                const file = item.getAsFile();
                                if (!file) continue;

                                const { url } = await uploadImage(file);
                                editor.insertContent(`<img src="${url}" />`);

                            }
                        }
                    });

                    editor.on("NodeChange", async (e: any) => {
                        const node = e.element;

                        if (node.nodeName !== "IMG") return;

                        const src = node.getAttribute("src");
                        if (!src || src.startsWith(APP_ENV.IMAGE_BASE_URL)) return;

                        try {
                            const blob = await fetch(src).then((r) => r.blob());
                            const file = new File([blob], "image.png", { type: blob.type });
                            const response = await saveImage({ imageFile: file }).unwrap();

                            uploadedImagesRef.current.push({
                                id: response.id,
                                imageName: response.imageName,
                            });

                            node.setAttribute("src", `${APP_ENV.IMAGE_BASE_URL}large/${response.imageName}`);

                            syncImageIds(editor.getContent());

                        } catch (err) {
                            console.error("Failed to reupload external image", err);
                        }
                    });
                },

                images_upload_handler: async (blobInfo) => {
                    const file = blobInfo.blob();
                    const { url } = await uploadImage(file);
                    return url;
                }

            }}
        />
    );
};

export default CityDescriptionEditor;
