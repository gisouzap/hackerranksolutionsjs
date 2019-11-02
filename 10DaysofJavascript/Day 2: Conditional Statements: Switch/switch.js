function getLetter(s) {
    let letter;
    // Write your code here
    switch (true)
    {
        case 'aeiou'.includes(s[0]):
        letter = 'A';
        break;
        case 'bcdef'.includes(s[0]):
        letter = 'B';
        break;
        case 'hjklm'.includes(s[0]):
        letter = 'C';
        break;
        default:
        letter = 'D';
    }
    return letter;
}
