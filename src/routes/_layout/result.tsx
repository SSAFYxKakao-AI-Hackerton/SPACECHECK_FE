import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/result')({
  component: ResultPageComponent,
});

function ResultPageComponent() {
  return (
    <div>
      <h1>Result Page</h1>
    </div>
  );
}
