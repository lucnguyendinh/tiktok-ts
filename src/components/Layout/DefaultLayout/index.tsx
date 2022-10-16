import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';

const DefaultLayout: React.FC = ({ children }: any) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
