import css from "./CafeInfo.module.css";

interface CafeProps {
  title: string;
  text: string;
}

export default function CafeInfo({ title, text }: CafeProps) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.description}>{text}</p>
    </div>
  );
}
