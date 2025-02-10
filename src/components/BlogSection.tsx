import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define an array of image URLs (Replace with actual image URLs)
const blogImages = [
  "/blog1.png",  // Replace with actual image paths or URLs
  "/blog2.png", 
  "/blog3.png"
];

const BlogSection = () => (
  <section className="mt-8">
    <h3 className="text-2xl font-bold mb-4">Featured Posts</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogImages.map((image, index) => (
        <Card key={index}>
          <CardContent>
           
              <Image src={image} alt={`Blog post ${index + 1}`} width={1000} height={1000} />
              <CardHeader className="flex items-start justify-start"><p><span className="text-[#23A6F0]">Google </span>Trending New</p></CardHeader>
            
            <h4 className="text-lg font-bold mt-2"> {/* Added margin-top here */}
            Loudest à la Madison #1 
            (L&apos;integral) {index + 1}
            </h4>
            <p className="text-sm text-gray-600">We focus on ergonomics and meeting
              you where you work. It's only a
              keystroke away.</p>
            <Button variant="link">Learn More &gt;</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default BlogSection;
