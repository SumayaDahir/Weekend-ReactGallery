CREATE TABLE gallery (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(250) NOT NULL,
    "description" TEXT,
    "likes" INT
    
);

INSERT INTO gallery ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '1' );
