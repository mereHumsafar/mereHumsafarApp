

import { FontAwesome6 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset
} from 'react-native-reanimated';
import SubmitButton from '../../../components/FormComponent/SubmitButton';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const DetailedPage = () => {
	const scrollRef = useAnimatedRef();
	const scrollOffset = useScrollViewOffset(scrollRef);
	const route = useRoute();
	const { item } = route.params || {};

	const imageAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[-IMG_HEIGHT, 0, IMG_HEIGHT],
						[-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
					)
				},
				{
					scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1])
				}
			]
		};
	});

	return (
		<View style={styles.container}>
			<Animated.ScrollView
			showsVerticalScrollIndicator={false}

			ref={scrollRef} scrollEventThrottle={16}>
				<Animated.Image
					source={{
						uri: item?.img
					}}
					style={[styles.image, imageAnimatedStyle]}
				/>
				<View style={{ backgroundColor: 'white' }} className="p-4  rounded-3xl ">
					<Section title="Introduction">
						<Text className="text-base  text-gray-800 mb-3">{item?.about}</Text>
					</Section>

					<Section title="Basic Details">
						<Field icon="calendar-days" label="DOB" value={item?.dob || '01 Jan 1999'} />
						<Field icon="location-dot" label="Address" value={item?.address || 'Mumbai, India'} />
						<Field icon="ruler-vertical" label="Height" value={item?.height || '5\'6"'} />
						<Field icon="weight-hanging" label="Weight" value={item?.weight || '60kg'} />
					</Section>
					

					<Section title="Education">
						<Field icon="graduation-cap" label="Degree" value={item?.education || 'B.Sc Computer Science'} />
						<Field icon="school" label="University" value={item?.university || 'Mumbai University'} />
					</Section>

					<Section title="Contact">
						<Field icon="envelope" label="Email" 
						value={item?.email || 'ayesha@example.com'} />
						<Field icon="phone" label="Phone" value={item?.phone || '+91 9876543210'} />
					</Section>

					<Section title="Family Details">
						<Field icon="person" label="Father" value={item?.father || 'Mr. Imran Khan'} />
						<Field icon="person-dress" label="Mother" value={item?.mother || 'Mrs. Shaista Khan'} />
						<Field icon="people-group" label="Siblings" value={item?.siblings || '1 Brother, 1 Sister'} />
					</Section>

				</View>

			</Animated.ScrollView>
			<View className="  bg-white px-4 py-3  flex-row items-center justify-between">
				<Pressable className="flex-row w-[48%] py-2 gap-2 items-center justify-center mr-2 py- rounded-md border border-gray-300">
				<Fontisto name="hipchat" size={20} color="gray" />
					<Text className="text-lg font-semibold text-gray-800">Chat</Text>
				</Pressable>
				<Pressable className="flex-row gap-2 items-center justify-center ml-2 py-2 w-[48%] rounded-md bg-primary">
				<Feather name="phone-call" size={20} color="white" />
					<Text className="text-lg font-semibold text-white">Call</Text>
				</Pressable>
			</View>
		</View>
	);
};
export default DetailedPage;

const Section = ({ title, children }) => (
	<View className=" rounded-xl border border-gray-200  p-4  my-2 bg-white  shadow-sm">
		<Text className="text-sm -mt-7 uppercase font-bold text-primary mb-3">{title}</Text>
		<View className="space-y-2">{children}</View>
	</View>
);

const Field = ({ icon, label, value }) => (
	<View className="flex-row items-center justify-start gap-5 my-1">
		<FontAwesome6 name={icon} size={20} color="lightgray" className="w-7 h-7" />
		<Text className="text-base font-semibold  text-gray-800">{value}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 'auto',
		backgroundColor: '#fff'
	},
	image: {
		width: width,
		height: IMG_HEIGHT
	}
});