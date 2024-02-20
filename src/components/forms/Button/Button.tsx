// import type { ButtonProps } from "./interfaces";

import * as S from "./styles";

export function Button({ children, ...props}: any) {
  return (
    <S.Container>
      <button {...props}>{children}</button>
    </S.Container>
  );
}
