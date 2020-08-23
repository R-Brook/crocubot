import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('./__tests__/features/tryout.feature');

defineFeature(feature, test => {
    test('Checking the main menu link is correct for <pageSection>', ({ given, when, then }) => {
    	given('I am on the homepage', () => {

    	});

    	when(/^I click on the link with the text (.*)$/, (arg0) => {

    	});

    	then(/^I should get taken to (.*)$/, (arg0) => {

    	});
    });
});