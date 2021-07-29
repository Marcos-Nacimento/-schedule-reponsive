import 
{ 
    Container,
    Content,
    Title,
    SubTitle,
    LogoName,
} from './styles';
import Lottie from 'react-lottie';
import Animation from '../../lottie/laptop.json';

export function Banner() {
    return (
        <Container>

            <Content>
                <Title>
                    Agendamento Fácil com <LogoName>Agenda ++</LogoName>
                </Title>

                <SubTitle>
                    Recursos avançados e fáceis de usar proporcionam à você total controle da sua agenda, 
                    reduzindo custos e aumentando a produtividade da equipe.
                </SubTitle>
            </Content>

            <Lottie 
                options={{
                    animationData: Animation,
                    autoplay: true,
                    loop: true,
                }}
                height='70%'
                width='70%'
                isClickToPauseDisabled
            />

        </Container>
    );
};