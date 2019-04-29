export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';


export const validPhone = value => {
     return value? 
      /(\d{3}-\d{3}-\d{4})|(\d{10,})/.test(value) ? undefined : 'Must be a valid phone number'
      : undefined;
}

export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

export const normalizePhone = (value, previousValue) => {
    if (!value) {
            return value // you can set a placeholder
        }
        const onlyNums = value.replace(/[^\d]/g, '')
        if (!previousValue || value.length > previousValue.length) {
            // typing forward
            if (onlyNums.length === 3) {
            return onlyNums + '-'
            }
            if (onlyNums.length === 6) {
            return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-'
            }
        }
        if (onlyNums.length <= 3) {
            return onlyNums
        }
        if (onlyNums.length <= 6) {
            return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
        }
        return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
    }
        
