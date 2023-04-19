const name = props.name ?? context.accountId;
const accountId = props.accountId ?? context.accountId;
const nameSize = props.nameSize ?? "1.625em";
const accountSize = props.accountSize ?? "0.95em";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${nameSize};
  color: #101828;
`;

const Account = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${accountSize};
  line-height: 1.4em;
  color: #687076;
`;

return (
  <Container>
    <Name>{name}</Name>
    <Account>@{accountId}</Account>
  </Container>
);
