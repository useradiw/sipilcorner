import Card from "@/components/display/card";

interface Props {
    data: searchData[];
};

const Results = ({ data }: Props) => {
    return (
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full my-4">
            {data.length >= 0 ? 
            data.map((item: any, i: number) => {
                return (
                    <Card key={i} title={item.properties.Title.title[0].text.content} imageSrc={item.cover.external.url} link={`blogs/${item.id}`}/>
                )
            })
            : <div>Try different keywords.</div>}
        </div>
    )
};

export default Results;