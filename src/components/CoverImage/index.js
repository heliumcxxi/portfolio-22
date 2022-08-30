import "./index.scss";

function CoverImage({ src }) {
  return (
    <div
      className="cover-image"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}

export default CoverImage;
