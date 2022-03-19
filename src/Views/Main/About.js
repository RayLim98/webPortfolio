import { useTheme } from '../../Context/ThemeContext'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper';
import HeadingText from '../../Components/TextStyles/HeadingText';

const About = () => {
	const { theme } = useTheme();
	return ( 
		<PageWrapper id="about" backgroundColor={theme.primary}>
			<HeadingText>
				About
			</HeadingText>
		</PageWrapper>
	 )
}

export default About