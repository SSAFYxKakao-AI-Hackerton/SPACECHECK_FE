import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/input')({
  component: InputPageComponent,
});

function InputPageComponent() {
  return (
    <div>
      <h1>Input Page</h1>
    </div>
  );
}
