
package com.example.movie_app.repository;

        import com.example.movie_app.model.User;

        import org.springframework.data.jpa.repository.JpaRepository;

        import org.springframework.stereotype.Repository;




@Repository


public interface UserRepository extends JpaRepository<User, Long> {




}