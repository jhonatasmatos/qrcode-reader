import { Button, Image, StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import qrcode from '../assets/qrcode.png'

export default function App() {
	return (
		<>
			<StatusBar backgroundColor='#2B73DE' />
			<View style={styles.container}>
				<View style={styles.container2}>
					<Text style={styles.title}>Leia o QR Code</Text>
					<Text style={styles.text}>
						Coloque o QR Code no centro para ler o código
					</Text>
					<Image source={qrcode} style={styles.img} />
				</View>
				<Button title='Ler o código' />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginHorizontal: 54,
		justifyContent: 'center',
	},

	container2: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 64,
	},

	title: {
		fontSize: 32,
		marginBottom: 24,
	},

	text: {
		fontSize: 14,
		marginBottom: 24,
	},

	img: {
		width: 200,
		height: 200,
	},

	button: {
		width: 260,
		height: 42,
	},
})
