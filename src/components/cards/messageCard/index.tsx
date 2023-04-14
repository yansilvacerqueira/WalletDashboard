import * as Style from "./styles";

type MessageCardProps = {
  title: string;
  description: string;
};

export const MessageCard = ({ title, description }: MessageCardProps) => {
  return (
    <Style.Container>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    </Style.Container>
  );
};
