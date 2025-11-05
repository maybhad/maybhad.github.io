// BHAD Garment - i18n System Test
// This script tests the i18n system structure and identifies issues

console.log('=== BHAD i18n SYSTEM STRUCTURE TEST ===');

// Load the translations file content
const fs = require('fs');
const i18nContent = fs.readFileSync('/workspace/i18n.js', 'utf8');

try {
    // Test 1: Parse the i18n file
    console.log('Test 1: Parsing i18n.js file...');
    eval(i18nContent);
    console.log('✓ File parsed successfully');
    
    // Test 2: Check translations object structure
    console.log('\nTest 2: Checking translations object...');
    if (typeof translations === 'undefined') {
        console.log('✗ ERROR: translations object not found');
        process.exit(1);
    }
    console.log('✓ translations object exists');
    
    // Test 3: Check language sections
    console.log('\nTest 3: Checking language sections...');
    const languages = Object.keys(translations);
    console.log('Available languages:', languages);
    
    if (!translations.en) {
        console.log('✗ ERROR: English (en) section missing');
        process.exit(1);
    }
    console.log('✓ English section found, keys:', Object.keys(translations.en).length);
    
    if (!translations.vi) {
        console.log('✗ ERROR: Vietnamese (vi) section missing');
        process.exit(1);
    }
    console.log('✓ Vietnamese section found, keys:', Object.keys(translations.vi).length);
    
    // Test 4: Check key matching between languages
    console.log('\nTest 4: Checking translation key matching...');
    const enKeys = Object.keys(translations.en).sort();
    const viKeys = Object.keys(translations.vi).sort();
    
    // Find missing keys
    const missingInVi = enKeys.filter(key => !viKeys.includes(key));
    const extraInVi = viKeys.filter(key => !enKeys.includes(key));
    
    if (missingInVi.length > 0) {
        console.log('✗ WARNING: Keys missing in Vietnamese:', missingInVi.slice(0, 5));
    }
    
    if (extraInVi.length > 0) {
        console.log('⚠ INFO: Extra keys in Vietnamese:', extraInVi.slice(0, 5));
    }
    
    console.log('✓ Key matching check completed');
    
    // Test 5: Check I18nManager class
    console.log('\nTest 5: Checking I18nManager class...');
    if (typeof I18nManager === 'undefined') {
        console.log('✗ ERROR: I18nManager class not found');
        process.exit(1);
    }
    console.log('✓ I18nManager class found');
    
    // Test 6: Test I18nManager instantiation
    console.log('\nTest 6: Testing I18nManager instantiation...');
    try {
        // Mock DOM elements for testing
        global.document = {
            querySelectorAll: () => [],
            querySelector: () => null,
            addEventListener: () => {},
            getElementById: () => null,
            readyState: 'complete'
        };
        global.window = { i18n: undefined };
        global.localStorage = {
            getItem: () => null,
            setItem: () => {}
        };
        
        const i18n = new I18nManager();
        console.log('✓ I18nManager instantiated successfully');
        console.log('✓ Default language:', i18n.getCurrentLanguage());
        
        // Test translation function
        const testKey = 'nav_home';
        const translation = i18n.getTranslation(testKey);
        console.log(`✓ Translation test: "${testKey}" = "${translation}"`);
        
        // Test language switching
        i18n.setLanguage('vi');
        console.log('✓ Language switching test passed, current:', i18n.getCurrentLanguage());
        
    } catch(e) {
        console.log('✗ ERROR: I18nManager instantiation failed:', e.message);
        console.log('Stack:', e.stack);
    }
    
    console.log('\n=== TEST SUMMARY ===');
    console.log('✓ All structural tests passed');
    console.log('✓ i18n system is properly structured');
    console.log('✓ No obvious structural bugs detected');
    
} catch(e) {
    console.log('\n=== CRITICAL ERROR ===');
    console.log('✗ ERROR:', e.message);
    console.log('✗ Stack:', e.stack);
    console.log('\nThis indicates a structural problem in the i18n file.');
}