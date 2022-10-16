import { Button } from "react-bootstrap";

export default function BackButton({ handleBack }) {
  return (
    <div>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
}
