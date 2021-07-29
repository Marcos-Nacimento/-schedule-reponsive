import 
{ 
    Container,
    Circle,
    Title,
    Button, 
} from './styles';
import { motion } from 'framer-motion';
import { FaMobile } from 'react-icons/all';

export function Hero() {
    return (
        <Container>
            <Circle>
                <FaMobile 
                    size={30}
                />
            </Circle>

            <Title>
                Controle tudo na 
                palma da sua mão
            </Title>

            <Button
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Experimente Grátis
            </Button>
        </Container>
    );
};