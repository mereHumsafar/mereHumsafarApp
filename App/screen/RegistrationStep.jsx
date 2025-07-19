import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ProgressStep, ProgressSteps, } from 'react-native-progress-steps';
import BasicForm from '../components/Forms/BasicForm';
import AddressForm from '../components/Forms/AddressForm';
import FamilyForm from '../components/Forms/FamilyForm';
import AccountForm from '../components/Forms/AccountForm';
import { useNavigation } from '@react-navigation/native';

export default function RegistrationStep() {
    const navigation = useNavigation();
    const defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
            flexGrow: 1,
            justifyContent: 'center',
        },
    };

    const onPaymentStepComplete = () => {
        console.log('payment step completed!');
    };

    const onNextStep = () => {
        console.log('called next step');
    };

    const onPrevStep = () => {
        console.log('called previous step');
    };

    const onSubmitSteps = () => {
        navigation.navigate("BottomTabs");
    };

    return (
        <View className="flex-1 bg-white pt-5 ">
            <ProgressSteps activeStepIconBorderColor='#d90429' activeStepTextColor='black' completedCheckColor='white' completedProgressBarColor='#d90429' activeStepIconColor='#d90429' completedStepIconColor='#d90429' activeStepNumColor='white' >
                <ProgressStep
                    label='Basic'
                    buttonFillColor='#d90429'
                    buttonNextTextColor='black'
                    buttonBorderColor='#d90429'
                    buttonBottomOffset={50}
                    onNext={onNextStep}
                    onPrevious={onPrevStep}
                    scrollViewProps={defaultScrollViewProps}
                >
                    <BasicForm />
                </ProgressStep>
                <ProgressStep
                    buttonNextTextColor='black'
                    buttonFillColor='red'
                    buttonPreviousTextColor='black'
                    buttonBottomOffset={50}
                    buttonBorderColor='red'
                    buttonPreviousIconColor='red'
                    label='Address'
                    onNext={onNextStep}
                    onPrevious={onPrevStep}
                    scrollViewProps={defaultScrollViewProps}
                >
                    <AddressForm />
                </ProgressStep>
                <ProgressStep
                    buttonNextTextColor='black'
                    label='Family'
                    onNext={onNextStep}
                    buttonBottomOffset={50}
                    onPrevious={onPrevStep}
                    scrollViewProps={defaultScrollViewProps}
                >
                    <FamilyForm />
                </ProgressStep>
                <ProgressStep
                    label='Finish'
                    buttonFinishText='Submit'
                    buttonFinishTextColor='black'
                    onPrevious={onPrevStep}
                    onSubmit={onSubmitSteps}
                    buttonBottomOffset={50}
                    scrollViewProps={defaultScrollViewProps}
                >
                    <AccountForm onNext={onNextStep} />
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
}