type ThemeBlockType = {
  name: string;
  text: string;
  image: string;
  reverse?: boolean;
};

function ThemeBlock({ name, text, image, reverse }: ThemeBlockType) {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{text}</div>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default ThemeBlock;
