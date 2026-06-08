import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pele de Seda — Marcela Dezan" },
      {
        name: "description",
        content:
          "Descubra a sequência de 4 ativos de farmácia que reconstrói a barreira da pele e faz qualquer base durar o dia todo.",
      },
      { property: "og:title", content: "Pele de Seda — Marcela Dezan" },
      {
        property: "og:description",
        content:
          "Descubra a sequência de 4 ativos de farmácia que reconstrói a barreira da pele e faz qualquer base durar o dia todo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/pagina-vendas.html"
      title="Página de vendas Pele de Seda"
      style={{
        border: "none",
        width: "100%",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
