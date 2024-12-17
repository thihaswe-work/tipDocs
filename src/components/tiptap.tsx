"use client";
import { Color } from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, TextStyle, Color],
    content: `
            <p><span style="color: #958DF1">Oh, for some reason that’s purple.</span></p>
          `,
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }
  const handleGetContent = () => {
    const content = editor.getHTML(); // or editor.getJSON() for JSON format
    console.log(content); // This will log the content to the console
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-16">
        <div>
          <div className="flex gap-10 my-10">
            <button
              onClick={() => editor.chain().focus().setColor("#958DF1").run()}
              className={` ${
                editor.isActive("textStyle", { color: "#958DF1" })
                  ? "is-active"
                  : ""
              }`}
              data-testid="setPurple"
            >
              Purple
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#F98181").run()}
            >
              Red
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#FBBC88").run()}
            >
              Orange
            </button>
          </div>
        </div>

        <EditorContent className="bg-white w-96 h-96" editor={editor} />

        {/* Button to get content */}
        <button className="mt-5" onClick={handleGetContent}>
          Get Content
        </button>
      </div>
    </>
  );
};

export default Tiptap;
