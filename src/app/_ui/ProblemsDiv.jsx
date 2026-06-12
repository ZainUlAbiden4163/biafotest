function ProblemsDiv({ key, heading, content }) {
  return (
    <div key={key} className="text-center border border-(--color-cyan)">
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  );
}

export default ProblemsDiv;
