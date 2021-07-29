import 
{
    Container,
    ContentLeft,
    ContentRight,
    Title,
    SubTitle,
} from './styles';

export function Custom(){
    return (
        <Container>
            <ContentLeft>
                <Title>
                    Estamos em constante evolução
                </Title>
                <SubTitle>
                    Nossa evolução é constante. 
                    Quase que diariamente publicamos 
                    novas correções e funcionalidades. 
                    E tudo isso é sem custo para você!
                </SubTitle>
            </ContentLeft>

            <ContentRight>
                <Title>
                    Nossa solução é segura
                </Title>
                <SubTitle>
                    Suas informações estão sempre disponíveis e seguras. 
                    Nosso servidor é seguro e realizamos backups constantes.
                </SubTitle>
            </ContentRight>
        </Container>
    );
};