export class Patient {
    public cnp: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public addressOne: string;
    public addressTwo: string;
    public dateOfBirth: string;
    public markedForDeletion: boolean;

    constructor(cnp: string = '',
                firstName: string = '',
                lastName: string = '',
                email: string = '',
                phone: string = '',
                addressOne: string = '',
                addressTwo: string = '',
                markedForDeletion: boolean = false,
                dateOfBirth: string = '') {
        this.cnp  = cnp;
        this.firstName  = firstName;
        this.lastName  = lastName;
        this.email = email;
        this.phone  = phone;
        this.addressOne  = addressOne;
        this.addressTwo  = addressTwo;
        this.markedForDeletion = markedForDeletion;
        this.dateOfBirth = dateOfBirth;
    }
}