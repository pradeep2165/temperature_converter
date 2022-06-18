function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p className="alert alert-success mt-2">The water would boil.</p>;
  }
  return <p className="alert alert-warning mt-2">The water would not boil.</p>;
}
export default BoilingVerdict;
