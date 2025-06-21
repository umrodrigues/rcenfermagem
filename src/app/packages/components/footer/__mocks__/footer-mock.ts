import { IFooter } from "@/app/packages/types/footer/Footer";

export const footerMock: IFooter = {
    developer: "Lunaris Tech",
    links: [
      {
        title: "Produtos",
        items: [
          { text: "Produto 1", url: "/produto-1" },
          { text: "Produto 2", url: "/produto-2" },
          { text: "Produto 3", url: "/produto-3" }
        ]
      },
      {
        title: "Recursos",
        items: [
          { text: "Recursos 1", url: "/recursos-1" },
          { text: "Recursos 2", url: "/recursos-2" }
        ]
      },
    ]
  };
