// import type { ButtonProps } from "./interfaces";

import * as S from "./styles";

export function Button({ children, color, ...props }: any) {
  return (
    <S.Container>
      <button className={color} {...props}>
        {children}
      </button>
    </S.Container>
  );
}
