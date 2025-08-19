

// components/NoticeCard.tsx
interface NoticeCardProps {
    title: string;
    date: string;
}

export const NoticeCard = ({ title, date }: NoticeCardProps) => {
    return (
        <div className="gap-4 bg-white p-4 rounded-lg shadow-custom">
            <p className="text-lg font-normal text-gray-800 mb-1">{title}</p>
            <p className="text-sm font-normal text-font-2 ">{date}</p>
        </div>

    );
};

