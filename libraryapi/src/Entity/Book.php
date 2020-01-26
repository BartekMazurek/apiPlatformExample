<?php

namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     collectionOperations={"GET","POST"},
 *     itemOperations={"GET", "DELETE"},
 *     normalizationContext={"groups"={"book.read"}},
 *     denormalizationContext={"groups"={"book.write"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 */
class Book
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"book.read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank()
     * @Assert\Type("string", message="Title must be a string")
     * @Groups({"book.read", "book.write"})
     */
    private $title;

    /**
     * @ORM\Column(type="date")
     * @Groups({"book.read", "book.write"})
     */
    private $release_date;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank()
     * @Assert\Type("string", message="Description must be a string")
     * @Groups({"book.read", "book.write"})
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Author")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"book.read", "book.write"})
     */
    private $author;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setReleaseDate(\DateTimeInterface $release_date): self
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAuthor(): ?Author
    {
        return $this->author;
    }

    public function setAuthor(?Author $author): self
    {
        $this->author = $author;

        return $this;
    }
}
