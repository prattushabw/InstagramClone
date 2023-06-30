import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Stories from "./Stories";
import Posts from "./Posts";
import { useSession } from "next-auth/react";


function Feed(){
    const { data: session } = useSession();

    return(
        //when the sugesstion box is not present have postsand stores be in the middle
            <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            {/* Section on the left */}
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>

            {/*Section on the right */}

            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                <div className="fixed top-20">
                    <MiniProfile />
                    <Suggestions />
                </div>
            </section>
            )}
            

        </main>
    );
}
export default Feed;
