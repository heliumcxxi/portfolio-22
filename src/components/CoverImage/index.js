import "./index.scss";

function CoverImage({ src }) {
  return (
    <div
      className="cover-image"
      style={{
        backgroundImage: `linear-gradient(13deg, rgba(251, 226, 239, 0.3), rgba(226, 251, 250, 0.3)) ,url(${src})`,
      }}
    />
  );
}

export default CoverImage;
