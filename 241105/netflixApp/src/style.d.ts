import "styled-components";

declare module "styled-componenets" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      dearker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    }
  }
}
