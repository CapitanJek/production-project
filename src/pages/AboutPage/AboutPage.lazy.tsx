import { lazy } from "react";
// lazy - позволяет компонент пихать не в общий бандл и загружать элемент по мере необходимости чтоб не перегружать страницу
export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore

        resolve(import("./AboutPage"));
      }, 1500);
    })
);
