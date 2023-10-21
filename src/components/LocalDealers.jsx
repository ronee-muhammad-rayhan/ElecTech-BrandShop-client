


import PropTypes from "prop-types"
export const Card = ({ dealer }) => {
    const { location, photo } = dealer;
    return (
        <div className="flex flex-col items-center">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={photo} />
                </div>
            </div>
            <h3 className="text-xl font-bold">{location}</h3>
        </div>
    );
}

Card.propTypes = {
    dealer: PropTypes.any
}
const LocalDealers = () => {
    const dealers = [
        {
            id: 1,
            location: 'Dhaka',
            photo: '/dealer.jpg',
        },
        {
            id: 2,
            location: 'Chittagong',
            photo: '/dealer.jpg',
        },
        {
            id: 3,
            location: 'Rajshahi',
            photo: '/dealer.jpg',
        },
        {
            id: 4,
            location: 'Rangpur',
            photo: '/dealer.jpg',
        },
        {
            id: 5,
            location: 'Khulna',
            photo: '/dealer.jpg',
        },
        {
            id: 6,
            location: 'Barishal',
            photo: '/dealer.jpg',
        },
        {
            id: 7,
            location: 'Shylhet',
            photo: '/dealer.jpg',
        },
        {
            id: 8,
            location: 'Mymensingh',
            photo: '/dealer.jpg',
        },
    ]
    return (
        <div>
            <h3 className="text-3xl font-black text-center pt-8">Delealers&apos; Section</h3>
            <h3 className="text-2xl font-bold text-center py-6">You Can collect from your local delealers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 pb-8">
                {
                    dealers.map(dealer => <Card key={dealer.id} dealer={dealer}></Card>)
                }
            </div>
        </div>
    );
};

export default LocalDealers;