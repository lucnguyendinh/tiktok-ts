import Header from '~/components/Layout/components/Header';

const HeaderOnly: React.FC = ({ children }: any) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
