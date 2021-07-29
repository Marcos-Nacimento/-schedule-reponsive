import 
{ 
    Container, 
    Title,
    AnimationContainer,
    Content,
    Item,
    Circle,
    Label,
    HeaderItem,
    SubLabel,
    ContentMsgAnimation,
    ButtonAction,
    LabelBig,
    LabelSmall,
} from './styles';
import { Banner } from '../../components/banner';
import { FiArrowRightCircle } from 'react-icons/all';
import { motion } from 'framer-motion';
import { Hero } from '../../components/hero';
import { Custom } from '../../components/contentCustom';

import Lottie from 'react-lottie';
import animationData from '../../lottie/people_happy.json';
import laptopAnimation from '../../lottie/laptop_heart.json';

export function Home() {
    return (
        <Container>
            <Banner />

            <AnimationContainer>

                <Lottie 
                    options={{
                        animationData: animationData,
                        loop: true,
                        autoplay: true,
                    }}
                    height='40%'
                    width='40%'
                    isClickToPauseDisabled
                />

                <Title>
                    Simplificando a vida de milhares de brasileiros
                </Title>

            </AnimationContainer>

            <Hero />

            <Content>
                <Item>
                    <HeaderItem>
                        <Circle>
                            1.
                        </Circle>
                        <Label>
                            Cadastro de clientes
                        </Label>
                    </HeaderItem>

                    <SubLabel>
                        Todas as informações dos seus 
                        clientes em um só local, 
                        fácil e seguro.
                    </SubLabel>
                </Item>

                <Item>
                    <HeaderItem>
                        <Circle>
                            2.
                        </Circle>
                        <Label>
                            Prontuário eletrônico
                        </Label>
                    </HeaderItem>

                    <SubLabel>
                        Personalize seu prontuário, 
                        de acordo com as necessidades do seu negócio.
                    </SubLabel>
                </Item>

                <Item>
                    <HeaderItem>
                        <Circle>
                            3.
                        </Circle>
                        <Label>
                            Controle financeiro
                        </Label>
                    </HeaderItem>

                    <SubLabel>
                        Completo, fácil de usar e otimizado 
                        para facilitar o seu trabalho.
                    </SubLabel>
                </Item>

                <Item>
                    <HeaderItem>
                        <Circle>
                            4.
                        </Circle>
                        <Label>
                            Relatórios analíticos
                        </Label>
                    </HeaderItem>

                    <SubLabel>
                        Tenha uma visão completa da sua 
                        empresa antes de tomar decições.
                    </SubLabel>
                </Item>

                <Item>
                    <HeaderItem>
                        <Circle>
                            5.
                        </Circle>
                        <Label>
                            Documentos eletrônicos
                        </Label>
                    </HeaderItem>

                    <SubLabel>
                        Economize tempo na emissão de ordens de serviço, 
                        receitas, atestados e declarações.
                    </SubLabel>
                </Item>

                <Item>
                    <HeaderItem>
                        <Circle>
                            6.
                        </Circle>
                        <Label>
                            Agendamento online
                        </Label>
                    </HeaderItem>

                    <SubLabel>
                        Seu cliente faz o agendamento pelo site sem 
                        que você precise fazer nada.
                    </SubLabel>
                </Item>
            </Content>

            <AnimationContainer>

                <ContentMsgAnimation>
                    <Title>
                        Agendamento Inteligente, simples e fácil conheça
                    </Title>

                    <ButtonAction
                        as={motion.div}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiArrowRightCircle 
                            color='rgb(0, 107, 255)'
                            size={32}
                        />
                    </ButtonAction>
                </ContentMsgAnimation>

                <Lottie 
                    options={{
                        animationData: laptopAnimation,
                        loop: true,
                        autoplay: true,
                    }}
                    height='30%'
                    width='30%'
                    isClickToPauseDisabled
                />

            </AnimationContainer>

            <Custom />

            <LabelBig>
                Faça mais do que você faz
                melhor
            </LabelBig>
            <LabelSmall>
                Otimizando a sua gestão, você terá mais tempo 
                para cuidar do que realmente importa: o seu cliente.
            </LabelSmall>

        </Container>
    );
};