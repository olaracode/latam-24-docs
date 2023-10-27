const h1Styles = "[&>h1]:text-2xl [&>h1]:font-bold [&>h1]:border-b-2";
const h2Styles = "[&>h2]:text-xl [&>h2]:font-bold [&>h2]:border-b-2 [&>h2]:my-3";
const h3Styles = "[&>h3]:text-lg [&>h3]:font-bold [&>h3]:mt-5 [&>h3]:mb-1 [&>h3]:border-b-2";
const ulStyles = "[&>ul]:list-disc [&>ul]:ml-5 [&>ul]:my-3";
const olStyles = "[&>ol]:list-decimal [&>ol]:ml-5 [&>ol]:my-3";
const liStyles = "[&>li]:my-2";
const blockquoteStyles = "[&>blockquote]:border-l-4 [&>blockquote]:pl-2 [&>blockquote]:my-3";

const mdClass = `${h1Styles} ${h2Styles} ${h3Styles} ${ulStyles} ${olStyles} ${liStyles} ${blockquoteStyles}`;
export default mdClass