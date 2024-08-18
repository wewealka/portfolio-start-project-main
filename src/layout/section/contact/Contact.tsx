import { S } from "./ContactsStyles";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";


export const Contact = () => {
  return (
    <S.Contact id={"contact"}>
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        <S.Form>
          <S.Field placeholder={"name"} />
          <S.Field placeholder={"aim"} />
          <S.Field placeholder={"message"} as={"textarea"} />
          <Button type={"submit"}>Send Message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};

