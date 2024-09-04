import { Container } from "./styles";

export function Button({
  Delete,
  title = "",
  loading = false,
  icon: Icon,
  ...rest
}) {
  return (
    <Container Delete={Delete} type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={25} />}
      {loading ? "Carregando" : title}
    </Container>
  );
}
