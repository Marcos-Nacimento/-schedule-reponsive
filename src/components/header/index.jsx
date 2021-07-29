import 
{
    Container,
    Logo,
    SignUp,
    RouteName,
    Routes,
    ContentRight,
} from './styles';
import { motion } from 'framer-motion';
import { FiSlack } from 'react-icons/all';
import { useHistory } from 'react-router-dom';

export function Header() {

    const history = useHistory();

    return (
        <Container>
            <Logo
                href='/'
            >
                <FiSlack 
                    color='#FFFFFF'
                    size={24}
                />
            </Logo>

            <Routes>
                <RouteName
                    as={motion.li}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => history.push('/')}
                >
                    Início
                </RouteName>
                <RouteName
                    as={motion.li}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Conheça
                </RouteName>
                <RouteName
                    as={motion.li}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => history.push('/price')}
                >
                    Preços
                </RouteName>
            </Routes>
            
            <ContentRight>
                <RouteName
                    as={motion.li}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Entrar
                </RouteName>
                <SignUp
                    as={motion.div}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => history.push('/signUp')}
                >
                    Cadastre-se
                </SignUp>
            </ContentRight>
        </Container>
    );
};