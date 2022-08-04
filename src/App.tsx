import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "react-bootstrap";
import { Form } from "./components/Form";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Form />
      </Container>
    </QueryClientProvider>
  );
}
