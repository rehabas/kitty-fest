INSERT INTO users (username, email, password, name, cover_picture, profile_picture, city, website) VALUES 
('Jane Doe', 'jane@gmail.com', '123456', 'Jane Doe', 'https://images.pexels.com/photos/87812/pexels-photo-87812.jpeg', 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'USA', 'https://janedoe.com'),
('John Doe', 'john@gmail.com', '123456', 'John Doe', 'https://images.pexels.com/photos/87812/pexels-photo-87812.jpeg', 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600', 'USA', 'https://johndoe.com');

INSERT INTO posts (description, img, user_id) VALUES 
('Lorem ipsum dolor sit amet consectetur, adipisicing elit', 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600', 1), 
('Architecto repellendus quas obcaecati odit, distinctio, sapiente quae ducimu quia pariatur itaque doloremque, provident vero hic', 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600', 1);

INSERT INTO comments (description, user_id, post_id) VALUES 
('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellendus quas obcaecati odit, distinctio, sapiente quae ducimus quia pariatur itaque doloremque', 1, 1),
('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellendus quas obcaecati odit', 1, 1),
('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellendus quas obcaecati odit, distinctio, sapiente quae ducimus quia pariatur itaque doloremque', 1, 2),
('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellendus quas obcaecati odit', 1, 2);

INSERT INTO stories (img, user_id) VALUES 
('https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 1),
('https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 1),
('https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 1),
('https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 1);

INSERT INTO relationships (follower_user_id, followed_user_id) VALUES 
(1, 2), (2,1);

INSERT INTO likes (user_id, post_id) VALUES (1, 1), (1, 2);
