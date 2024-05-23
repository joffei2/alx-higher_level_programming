-- the
SELECT `title`, SUM(`rate`) AS `rating`
    FROM `tv_shows` AS t
        INNER JOIN `tv_shows_rating` AS r
        ON t.`id` = r.`shows_id`
GROUP BY `title`
ORDER BY `rating` DESC;
