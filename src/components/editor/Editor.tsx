'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { useCallback, useEffect } from 'react'
import styles from './Editor.module.scss'

interface EditorProps {
  content?: string
  onChange?: (html: string) => void
  placeholder?: string
  editable?: boolean
  className?: string
}

export default function Editor({
  content = '',
  onChange,
  placeholder = '내용을 입력하세요...',
  editable = true,
  className = '',
}: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
    ],
    content,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: styles.editorContent,
        'data-placeholder': placeholder,
      },
    },
  })

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  const handleButtonClick = useCallback(
    (callback: () => void) => (e: React.MouseEvent) => {
      e.preventDefault()
      callback()
    },
    []
  )

  if (!editor) {
    return null
  }

  return (
    <div className={`${styles.editorWrapper} ${className}`}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleBold().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('bold') ? styles.active : ''}`}
            title="굵게 (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleItalic().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('italic') ? styles.active : ''}`}
            title="기울임 (Ctrl+I)"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleUnderline().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('underline') ? styles.active : ''}`}
            title="밑줄 (Ctrl+U)"
          >
            <u>U</u>
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleStrike().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('strike') ? styles.active : ''}`}
            title="취소선"
          >
            <s>S</s>
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('heading', { level: 1 }) ? styles.active : ''}`}
            title="제목 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('heading', { level: 2 }) ? styles.active : ''}`}
            title="제목 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('heading', { level: 3 }) ? styles.active : ''}`}
            title="제목 3"
          >
            H3
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleBulletList().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('bulletList') ? styles.active : ''}`}
            title="글머리 기호"
          >
            •
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleOrderedList().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('orderedList') ? styles.active : ''}`}
            title="번호 매기기"
          >
            1.
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleBlockquote().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('blockquote') ? styles.active : ''}`}
            title="인용"
          >
            {'"'}
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().toggleCodeBlock().run()
            )}
            className={`${styles.toolbarButton} ${editor.isActive('codeBlock') ? styles.active : ''}`}
            title="코드 블록"
          >
            {'</>'}
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.toolbarGroup}>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().undo().run()
            )}
            disabled={!editor.can().undo()}
            className={styles.toolbarButton}
            title="실행 취소 (Ctrl+Z)"
          >
            ↩
          </button>
          <button
            type="button"
            onClick={handleButtonClick(() =>
              editor.chain().focus().redo().run()
            )}
            disabled={!editor.can().redo()}
            className={styles.toolbarButton}
            title="다시 실행 (Ctrl+Y)"
          >
            ↪
          </button>
        </div>
      </div>

      <EditorContent editor={editor} className={styles.editorContainer} />
    </div>
  )
}
