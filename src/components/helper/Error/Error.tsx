import * as S from "./styles";

export function Error({error}: any) {
  if (!error) return null;
  return <S.Container>{error}</S.Container>;
}
