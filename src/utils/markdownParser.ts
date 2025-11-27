/**
 * 간단한 마크다운 파서 - AI 응답을 HTML로 변환
 */
export const parseMarkdown = (markdown: string): string => {
  if (!markdown) return '';

  let html = markdown;

  // ## 제목 (h2)
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

  // ### 제목 (h3)
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');

  // **굵은 글씨**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // 줄바꿈 처리 (두 개의 연속된 줄바꿈은 <p> 태그로)
  const paragraphs = html.split('\n\n');
  html = paragraphs
    .map((para) => {
      // 이미 HTML 태그로 시작하는 경우 (h2, h3 등)
      if (para.trim().startsWith('<h')) {
        return para.trim();
      }
      // 빈 줄
      if (!para.trim()) {
        return '';
      }
      // 일반 텍스트는 p 태그로 감싸기
      return `<p>${para.trim().replace(/\n/g, '<br/>')}</p>`;
    })
    .filter((p) => p !== '')
    .join('');

  return html;
};

